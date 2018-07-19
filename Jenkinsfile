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

		stage("Create Docker Image"){

			steps{
					sh 'docker build -t ${JOB_NAME}:${BUILD_NUMBER} .'
			}
		}

		stage("Publish Docker Image"){

			steps{
					sh 'docker tag ${JOB_NAME}:${BUILD_NUMBER} mdv-docdevl01:18444/${JOB_NAME}:${BUILD_NUMBER}'
					sh 'docker rmi ${JOB_NAME}:${BUILD_NUMBER}'
			}
		}

		//stage("Stop App"){
			//steps{
					//sh 'docker stop ${JOB_NAME}'
					//sh 'docker rm ${JOB_NAME}' 
			//}
		//}
		stage("Run App"){
			steps{
					sh 'docker run -d --name ${JOB_NAME} -p 80:80 mdv-docdevl01:18444/${JOB_NAME}:${BUILD_NUMBER}'
			}
		}
       //stage("Deploy to AWS EC2"){
	   //		steps {
	   //		sh "cp ../../ssh.sh ."
	   //		sh "bash ssh.sh"
      //			}
		//	}
		}
	}


