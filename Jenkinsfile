pipeline{
    agent any
    stages{
        stage("install denpendency"){
            steps{
                echo "=======安装依赖====="
                bat 'npm install --registry=https://registry.npmmirror.com'
            }
        }
        stage("install denpendency"){
                steps{
                  echo "=======执行打包====="
                 bat 'npm run build'
                }
            }
          stage("install denpendency"){
               steps{
               echo "=======复制打包资源====="
               bat 'xcopy .\dist\* D:\nginx-1.20.2\html /Y /Q /s /e'
               }
            }
          stage("project deploy finish!"){
            steps{
            echo "=======部署完成====="
            }
          }
    }
}