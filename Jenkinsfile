pipeline{
	agent any
	  stages {
 
		stage("LINTING & BUILD") {
			steps{
				sh 'rm -rf dist'
				sh "npm install"
				sh "tslint --project tsconfig.json 'src/app/**/*.ts' -e 'src/app/**/*spec.ts'"
				sh "npm run build-dev"
				// sh "ng build"
			}
		}
		
		// Running unit test after build
		//stage('RUN UNIT TESTS'){
		  //steps{
		    	// Added to run unit test case for all module.
		    //  sh "npm run cibuild_test"
		  //}
		//}

		//stage('STATIC ANALYSIS'){
		  //  steps{
		    //    sh "npm run sonar-run"
		    //}
		//}

		stage("BUILD & PUBLISH IMAGE"){
			environment {
				DOCKER_NEXUS_CREDS = credentials('nexus')
            }
			steps{
					sh 'docker build -t ${NEXUS_REPO_URL}/${JOB_NAME}-dev:${BUILD_NUMBER} .'
					// login into nexus docker, push the image to nexus and remove from local.
					sh 'docker login --username $DOCKER_NEXUS_CREDS_USR --password $DOCKER_NEXUS_CREDS_PSW ${NEXUS_REPO_URL}'
					sh 'docker push ${NEXUS_REPO_URL}/${JOB_NAME}-dev:${BUILD_NUMBER}'
					sh 'docker rmi ${NEXUS_REPO_URL}/${JOB_NAME}-dev:${BUILD_NUMBER}'
			}
		}

		stage("DEPLOY TO DEV"){
			environment {
				DOCKER_NEXUS_CREDS = credentials('nexus')
				CUSTOMER_PORTAL_CLIENT_ID = credentials('CUSTOMER_PORTAL_CLIENT_ID')
				CUSTOMER_PORTAL_CLIENT_SECRET_KEY = credentials('CUSTOMER_PORTAL_CLIENT_SECRET_KEY')
            }
			steps{
        		ansibleTower(
								towerServer: 'ANSIBLE_TOWER',
								templateType: 'job',
								jobTemplate: 'deploy_customer_portal_ui_on_prem',
								importTowerLogs: true,
								inventory: 'ON_PREM_DEVELOPMENT',
								jobTags: '',
								skipJobTags: '',
								limit: '',
								removeColor: false,
								verbose: true,
								credential: '',
								extraVars: '''---
user: "glam"
docker_registry_username: "$DOCKER_NEXUS_CREDS_USR"
docker_registry_password: "$DOCKER_NEXUS_CREDS_PSW"
docker_registry: "${NEXUS_REPO_URL}"
image_name: "${NEXUS_REPO_URL}/${JOB_NAME}-dev"
tag: "${BUILD_NUMBER}"
container_name: "${CUSTOMER_PORTAL_APP_NAME}"
container_image: "${NEXUS_REPO_URL}/${JOB_NAME}-dev:${BUILD_NUMBER}"
api_gateway_url: "https://dev.mapfreapis.com/"
client_id: "$CUSTOMER_PORTAL_CLIENT_ID"
client_secret: "$CUSTOMER_PORTAL_CLIENT_SECRET_KEY"
ports: 
 - "80:80"
 - "443:443"'''
            )			
				}
		}

		stage("PERFORMANCE ANALYSIS"){
			steps{
				sh "./node_modules/lighthouse/lighthouse-cli/index.js 'http://mdv-doctest/login' --output-path=./lighthouse-report-3g-desktop.html --quiet --chrome-flags='--headless --no-sandbox --disable-gpu' --throttling.throughputKbps=2000 --emulated-form-factor=none"
        sh "./node_modules/lighthouse/lighthouse-cli/index.js 'http://mdv-doctest/login' --output-path=./lighthouse-report-4g-desktop.html --quiet --chrome-flags='--headless --no-sandbox --disable-gpu' --throttling.throughputKbps=5000 --emulated-form-factor=none"
        sh "./node_modules/lighthouse/lighthouse-cli/index.js 'http://mdv-doctest/login' --output-path=./lighthouse-report-fast-4g-desktop.html --quiet --chrome-flags='--headless --no-sandbox --disable-gpu' --throttling.throughputKbps=14000 --emulated-form-factor=none"
        sh "./node_modules/lighthouse/lighthouse-cli/index.js 'http://mdv-doctest/login' --output-path=./lighthouse-report-3g-mobile.html --quiet --chrome-flags='--headless --no-sandbox --disable-gpu' --throttling.throughputKbps=2000"
        sh "./node_modules/lighthouse/lighthouse-cli/index.js 'http://mdv-doctest/login' --output-path=./lighthouse-report-4g-mobile.html --quiet --chrome-flags='--headless --no-sandbox --disable-gpu' --throttling.throughputKbps=5000"
        sh "./node_modules/lighthouse/lighthouse-cli/index.js 'http://mdv-doctest/login' --output-path=./lighthouse-report-fast-4g-mobile.html --quiet --chrome-flags='--headless --no-sandbox --disable-gpu' --throttling.throughputKbps=14000"
			}
		}


		stage("DOCUMENTATION"){
			environment {
                BITBUCKET_COMMON_CREDS = credentials('bitbucket')
            }
			steps{
						sh "cp ./lighthouse*.html ../api-documentation/customer-portal-ui"
						sh "git -C '../api-documentation' add ."
						sh "git -C '../api-documentation' commit -m 'Publishing new API Documentation'"
						sh 'git -C "../api-documentation" pull https://$BITBUCKET_COMMON_CREDS_USR:$BITBUCKET_COMMON_CREDS_PSW@bitbucket.org/mapfre-usa-b2c/api-documentation.git'
						sh 'git -C "../api-documentation" push https://$BITBUCKET_COMMON_CREDS_USR:$BITBUCKET_COMMON_CREDS_PSW@bitbucket.org/mapfre-usa-b2c/api-documentation.git'
				
			}
		}

		stage('E2E TEST'){
            steps {
                sh 'npm run pre_e2e'
                sh 'npm run e2e_compile'
                sh 'npm run e2e_run'
            }
		}

		stage("PROD - BUILD & PUBLISH IMAGE"){
			environment {
				DOCKER_NEXUS_CREDS = credentials('nexus')
				CUSTOMER_PORTAL_CLIENT_ID = credentials('CUSTOMER_PORTAL_CLIENT_ID')
				CUSTOMER_PORTAL_CLIENT_SECRET_KEY = credentials('CUSTOMER_PORTAL_CLIENT_SECRET_KEY')
            }
			steps{
					sh "npm run build"
					sh 'docker build -t ${NEXUS_REPO_URL}/${JOB_NAME}:${BUILD_NUMBER} .'
					// login into nexus docker, push the image to nexus and remove from local.
					sh 'docker login --username $DOCKER_NEXUS_CREDS_USR --password $DOCKER_NEXUS_CREDS_PSW ${NEXUS_REPO_URL}'
					sh 'docker push ${NEXUS_REPO_URL}/${JOB_NAME}:${BUILD_NUMBER}'
					sh 'docker rmi ${NEXUS_REPO_URL}/${JOB_NAME}:${BUILD_NUMBER}'
			}
		}

		stage("PROD"){
			environment {
				DOCKER_NEXUS_CREDS = credentials('nexus')
            }
			steps{
        		ansibleTower(
								towerServer: 'ANSIBLE_TOWER',
								templateType: 'job',
								jobTemplate: 'deploy_customer_portal_ui_to_aws',
								importTowerLogs: true,
								inventory: 'AWS_DEVELOPMENT',
								jobTags: '',
								skipJobTags: '',
								limit: '',
								removeColor: false,
								verbose: true,
								credential: '',
								extraVars: '''---
user: "ec2-user"
docker_registry_username: "$DOCKER_NEXUS_CREDS_USR"
docker_registry_password: "$DOCKER_NEXUS_CREDS_PSW"
docker_registry: "${NEXUS_REPO_URL}"
image_name: "${NEXUS_REPO_URL}/${JOB_NAME}"
tag: "${BUILD_NUMBER}"
container_name: "${CUSTOMER_PORTAL_APP_NAME}"
container_image: "${NEXUS_REPO_URL}/${JOB_NAME}:${BUILD_NUMBER}"
api_gateway_url: "https://mapfreapis.com:443/"
client_id: "$CUSTOMER_PORTAL_CLIENT_ID"
client_secret: "$CUSTOMER_PORTAL_CLIENT_SECRET_KEY"
ports: 
 - "80:80"
 - "443:443"'''
            )			
				}
		}
	}
}


