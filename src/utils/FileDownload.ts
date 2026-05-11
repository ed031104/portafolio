export function downloadFile(url: string, filename: string): void {
    try{

        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }catch(error){
        console.error('Error al descargar el archivo:', error);
    }
}