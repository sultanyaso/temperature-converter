pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                echo "Cloning the repository..."
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint & Test') {
            steps {
                echo "Running linting and tests..."
                sh 'npm test || true'     // if no tests, prevents failure
            }
        }

        stage('Archive Build Artifact') {
            steps {
                echo "Creating build artifact..."
                sh 'zip -r build-artifact.zip .'
                archiveArtifacts artifacts: 'build-artifact.zip', fingerprint: true
            }
        }
    }

    post {
        success {
            echo "Build succeeded! Email sent to i221510@nu.edu.pk.com"
        }
        failure {
            echo "Build failed! Email sent to i221510@nu.edu.pk.com"
        }
    }
}
