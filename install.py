import subprocess
import sys
from rich.progress import Progress

def install(package):
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", package])
        return True
    except subprocess.CalledProcessError:
        return False

def main():
    with open("requirements.txt", "r") as file:
        packages = [pkg.strip() for pkg in file.readlines() if pkg.strip()]

    total_packages = len(packages)
    
    with Progress() as progress:
        task = progress.add_task("[green]Installing packages...", total=total_packages)
        
        for package in packages:
            if install(package):
                progress.console.print(f"[green]Successfully installed {package}")
            else:
                progress.console.print(f"[red]Failed to install {package}")
            progress.update(task, advance=1)

if __name__ == "__main__":
    main()
