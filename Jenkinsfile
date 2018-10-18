pipeline{
	agent any
	  stages {

		   // cloning code into the container
        stage('Setup'){
         environment {
                BITBUCKET_COMMON_CREDS = credentials('anj-bitbucket')
            }
            //removing old code if there is any, initializing new local repo and cloning into it.
            steps{
                sh 'rm -rf customer-portal && git init && git clone https://$BITBUCKET_COMMON_CREDS_USR:$BITBUCKET_COMMON_CREDS_PSW@bitbucket.org/mapfre-usa-b2c/customer-portal.git'
				sh "npm install"
            }
        }
		 
		stage("Linting & Build") {
			steps{
              	// removing .spec.ts from linting
				sh "tslint --project tsconfig.json 'src/app/**/*.ts' -e 'src/app/**/*spec.ts'"
			//	sh "npm run cibuild_test"
				 sh "npm run build"
			}
		}
		
		// Running unit test after build
		stage('Run Unit Test'){
		    steps{
		    	//Added to run unit test case for all module.
		       sh "npm run test_on_ciserver"
		    }
		}

		stage('Static analysis'){
		    steps{
				sh "cp -r ./coverage/* ./customer-portal/reports/coverage"
		        sh "npm run sonar-run"
		    }
		}

		stage("Build & Publish Image"){
			environment {
				DOCKER_NEXUS_CREDS = credentials('nexus')
            }
			steps{
					sh 'docker build -t ${NEXUS_REPO_URL}/${JOB_NAME}:${BUILD_NUMBER} .'
					// login into nexus docker, push the image to nexus and remove from local.
					sh 'docker login --username $DOCKER_NEXUS_CREDS_USR --password $DOCKER_NEXUS_CREDS_PSW ${NEXUS_REPO_URL}'
					sh 'docker push ${NEXUS_REPO_URL}/${JOB_NAME}:${BUILD_NUMBER}'
					sh 'docker rmi ${NEXUS_REPO_URL}/${JOB_NAME}:${BUILD_NUMBER}'
			}
		}

		stage("Deploy Image to test"){
			environment {
				DOCKER_NEXUS_CREDS = credentials('nexus')
            }
			steps{
        		ansibleTower(
								towerServer: 'Ansible Tower',
								templateType: 'job',
								jobTemplate: 'deploy_customer_portal_ui',
								importTowerLogs: true,
								inventory: 'dev_boxes',
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
image_name: "${NEXUS_REPO_URL}/${JOB_NAME}"
tag: "${BUILD_NUMBER}"
container_name: "${CUSTOMER_PORTAL_APP_NAME}"
container_image: "${NEXUS_REPO_URL}/${JOB_NAME}:${BUILD_NUMBER}"
ports: 
 - "80:80"
 - "443:443"'''
            )			
				}
		}

		stage("Lighthouse Performance Monitor"){
			steps{
				sh "npm run lighthouse:ci"
				sh "cp ./lighthouse-report.html ./customer-portal/reports/lighthouse"
			publishHTML (target: [
			allowMissing: false,
			alwaysLinkToLastBuild: false,
			keepAll: true,
			reportDir: '.',
			reportFiles: 'lighthouse-report.html',
			reportName: "Lighthouse"
			])
			}
		}


		stage("Pushing reports to git repo"){
			steps{
				sh "cd ./customer-portal"
				sh "git status > status.txt"
			}
		}



		stage("Deploy Image to Prod"){
			environment {
				DOCKER_NEXUS_CREDS = credentials('nexus')
            }
			steps{
        		ansibleTower(
								towerServer: 'Ansible Tower',
								templateType: 'job',
								jobTemplate: 'deploy_customer_portal_ui_to_aws',
								importTowerLogs: true,
								inventory: 'Front-End-AWS',
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
image_name: "${NEXUS_REPO_URL}/${JOB_NAME}"
tag: "${BUILD_NUMBER}"
container_name: "${CUSTOMER_PORTAL_APP_NAME}"
container_image: "${NEXUS_REPO_URL}/${JOB_NAME}:${BUILD_NUMBER}"
ports: 
 - "80:80"
 - "443:443"'''
            )			
				}
		}
	}
}


