pipeline{
	agent any
	  stages {

		   // cloning code into the container
        stage('Clone the latest code'){
         environment {
                BITBUCKET_COMMON_CREDS = credentials('anj-bitbucket')
            }
            //removing old code if there is any, initializing new local repo and cloning into it.
            steps{
                sh 'rm -rf customer-portal && git init && git clone https://$BITBUCKET_COMMON_CREDS_USR:$BITBUCKET_COMMON_CREDS_PSW@bitbucket.org/mapfre-usa-b2c/customer-portal.git'
            }
        }
		  //Installing the dependencies need to carryout the subsequent stages
		   stage("Install dependencies"){
			steps{
				//sh "npm reinstall node-sass"
				sh "npm install"
			}
		}
		stage("Static Analysis") {
			steps{
              	// removing .spec.ts from linting
				sh "tslint --project tsconfig.json 'src/app/**/*.ts' -e 'src/app/**/*spec.ts'"
			}
		}
		 stage("Create build"){
			steps{
				sh "npm run build"
			}
		}
		stage('run static analysis'){
		    steps{
		        sh "npm run sonar-run"
		    }
		}
		stage("Create Docker Image"){

			steps{
					sh 'docker build -t ${NEXUS_REPO_URL}/${JOB_NAME}:${BUILD_NUMBER} .'
			}
		}

		stage("Publish Docker Image"){
			 environment {
				DOCKER_NEXUS_CREDS = credentials('nexus')
            }
			steps{
					// login into nexus docker, push the image to nexus and remove from local.
					sh 'docker login --username $DOCKER_NEXUS_CREDS_USR --password $DOCKER_NEXUS_CREDS_PSW ${NEXUS_REPO_URL}'
					sh 'docker push ${NEXUS_REPO_URL}/${JOB_NAME}:${BUILD_NUMBER}'
					sh 'docker rmi ${NEXUS_REPO_URL}/${JOB_NAME}:${BUILD_NUMBER}'
			}
		}

		stage("Stop and remove the old Container"){
			environment {
				DOCKER_NEXUS_CREDS = credentials('nexus')
            }
			steps{
					// Stopping the old app, removing the container as well as the image
					sh 'docker stop ${CUSTOMER_PORTAL_APP_NAME} || true && docker rm ${CUSTOMER_PORTAL_APP_NAME} || true && docker rmi $(docker images |grep ${NEXUS_REPO_URL}/${JOB_NAME}) || true'
			}
		}
		stage("Run App"){
			steps{
					// Running the app with the new image
					sh 'docker run -d --name ${CUSTOMER_PORTAL_APP_NAME} -p 80:80 ${NEXUS_REPO_URL}/${JOB_NAME}:${BUILD_NUMBER}'
			}
		}
	}
}


