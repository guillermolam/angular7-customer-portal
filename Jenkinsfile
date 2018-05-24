pipeline{
	agent any
  	environment {
		AWS_BIN = '/root/.local/bin/aws'
	}
	  stages {
		  //Installing the dependencies need to carryout the subsequent stages
		   stage("Install dependencies"){
			steps{
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
        stage("Deploy to AWS EC2"){
			steps {
				//remove the old files
				sh "ssh jenkins@18.205.178.104 rm -rf /var/www/html/"
				}
			}
		}
	}


