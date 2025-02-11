pipeline{
    agent any
      environment {
                LANG = 'zh_CN.UTF-8'
                LC_ALL = 'zh_CN.UTF-8'
            }
    stages{
        stage("install dependency"){
            steps{
                echo "=======start install dependency====="
                bat 'npm install --registry=https://registry.npmmirror.com'
            }
        }
        stage("exeute package"){
                steps{
                 echo "=======start exeute package====="
                 bat 'npm run build'
                }
        }
        stage("copy files"){
              steps{
               echo "=======start copy files====="
               bat 'xcopy .\\dist\\* D:\\nginx-1.20.2\\html /Y /Q /s /e'
               }
        }
        stage("project deploy finish!"){
            steps{
                echo "=======finish====="
            }
        }
    }
}