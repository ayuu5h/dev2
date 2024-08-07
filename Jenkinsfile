pipeline {
    agent any

    environment {
        AWS_ACCESS_KEY_ID = credentials('aws-access-key-id')
	AWS_SECRET_ACCESS_KEY_ID = credentials('aws-secret-access-key-id')
	
    }

    stages {
        stage('Create_Infra') {
            steps {
                script {
                    sh 'terraform init'
                    sh 'terraform apply -auto-approve'
                }
            }
        }
        stage('Deploy_Apps') {
            steps {
                script {
                    sh 'terraform apply -auto-approve'
                }
            }
        }
        stage('Test_Solution') {
            steps {
                script {
                    def frontend_ip = sh(script: "terraform output frontend_public_ip", returnStdout: true).trim()
                    echo "Frontend IP: ${frontend_ip}"
                    sh "curl http://${frontend_ip}:80"
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'terraform-output.txt', allowEmptyArchive: true
        }
    }
}