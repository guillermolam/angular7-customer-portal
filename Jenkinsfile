pipeline{
	agent any
	  stages {

		   // cloning code into the container
        stage('clone and setup gradle wrapper'){
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
				//sh "npm install && npm i -g @angular/core@^2.3.1 && npm i -g @angular/common@^2.0.0 && npm i -g @angular/compiler@^2.3.1 && npm i -g typescript"
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
				sh "npm build"
			}
		}

		stage("Create Docker Image"){
			steps{
					sh 'docker build -t customer-portal .'
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


