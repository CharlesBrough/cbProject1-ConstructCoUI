pipeline {
    agent any

    stages {
        stage('build'){
            steps{
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('deploy to s3'){
            steps{
                sh 'aws s3 rm s3://revature-public-bucket --recursive'
                sh 'aws s3 cp --recursive /home/ec2-user/.jenkins/workspace/Construction-Frontend/build/ s3://revature-public-bucket/'
            }
        }
    }
}
