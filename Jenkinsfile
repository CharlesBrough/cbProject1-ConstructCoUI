pipeline {
    agent any

    tools {nodejs "nodejs"}

    stages {
        stage('install dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage('build'){
            steps{
                sh 'npm run build'
            }
        }
        stage('clean s3'){
            steps{
                sh 'aws s3 rm s3://revature-public-bucket --recursive'
            }
        }
        stage('deploy to s3'){
            steps{
                sh 'aws s3 cp --recursive /home/ec2-user/.jenkins/workspace/Construction-Frontend/build/ s3://revature-public-bucket/'
            }
        }
    }
}
