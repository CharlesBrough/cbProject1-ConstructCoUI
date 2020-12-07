pipeline {
    agent any

    stages {
        // stage('placeholder'){
        //     steps{
        //         sh 'echo "this is a placeholder until further development"'
        //     }
        // }
        stage('build'){
            steps{
                sh 'npm run install'
                sh 'npm run build'
            }
        }
        // stage('deploy to s3'){
        //     steps{
        //         sh 'aws s3 cp --recursive /home/ec2-user/.jenkins/workspace/Construction-Frontend/build/ s3://revature-public-bucket/'
        //     }
        // }
        stage('deploy to this ec2 apache webserver'){
            steps{
                sh 'rm -rf /var/www/html/jenkins-react-app'
                sh 'cp -R /home/ec2-user/.jenkins/workspace/Construction-Frontend/build/ /var/www/html/jenkins-react-app'
            }
        }
    }
}
