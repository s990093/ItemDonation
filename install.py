import subprocess
import sys

def install(package):
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", package])
        print(f"Successfully installed {package}")
    except subprocess.CalledProcessError:
        print(f"Failed to install {package}")

def main():
    with open("requirements.txt", "r") as file:
        packages = file.readlines()

    for package in packages:
        package = package.strip()
        if package:
            install(package)

if __name__ == "__main__":
    main()
