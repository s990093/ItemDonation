# 设置虚拟环境路径（如果使用虚拟环境）
# $envPath = "path\to\your\venv\Scripts\Activate.ps1"

# # 激活虚拟环境（可选，如果没有虚拟环境可以跳过这步）
# if (Test-Path $envPath) {
#     & $envPath
# } else {
#     Write-Host "虚拟环境未找到，继续以系统 Python 运行 Django"
# }

# # 进入项目目录
# cd "D:\ItemDonation\server"

# 运行 Django 开发服务器
python manage.py runserver 0.0.0.0:8001
