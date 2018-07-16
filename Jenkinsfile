pipeline{
	agent { docker { image 'mdv-docdevl01:18444/jenkins-customer-portal-agent' } }
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
       //stage("Deploy to AWS EC2"){
	   //		steps {
	   //		sh "cp ../../ssh.sh ."
	   //		sh "bash ssh.sh"
      //			}
		//	}
		}
	}


