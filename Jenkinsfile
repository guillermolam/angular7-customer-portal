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
				sh "npm run build"
			}
		}
		
		stage('Static analysis'){
		    steps{
		        sh "npm run sonar-run"
		    }
		}

		stage('Run Unit Test'){
		    steps{
		    	//Added to run unit test case for all module.
		        sh "npm test"
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
		stage("Deploy Image"){
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
                  comma_separated_hosts: "mdv-doctest"
                  user: "glam"
                  docker_registry_username: "admin"
                  docker_registry_password: "admin123"
                  docker_registry: "mdv-docdevl01:18444"
                  image_name: "mdv-docdevl01:18444/customer-portal-ui/master"
                  tag: "100"
                  container_name: "customer-portal-ui"
                  container_image: "mdv-docdevl01:18444/customer-portal-ui/master:100"
                  ports: 
                    - "80:80"'''
            )			
				}
		}
	}
}


