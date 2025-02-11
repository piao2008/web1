pipeline{
    agent any
    stages{
        stage("install dependency"){
            steps{
                echo "=======安装依赖====="
                bat 'npm install --registry=https://registry.npmmirror.com'
            }
        }
        stage("exeute package"){
                steps{
                 echo "=======执行打包====="
                 bat 'npm run build'
                }
            }
          stage("copy files"){
               steps{
               echo "=======复制打包资源====="
               bat 'xcopy .\\dist\\* D:\\nginx-1.20.2\\html /Y /Q /s /e'
               }
            }
          stage("project deploy finish!"){
            steps{
            echo "=======部署完成====="
            }
          }
    }
}