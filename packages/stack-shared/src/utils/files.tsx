export async function checkImageUrl(url: string){
  try {
    const res = await fetch(url, { method: 'HEAD' });
    const buff = await res.blob();
    return buff.type.startsWith('image/');
  } catch (e) {
    return false;
  }
}

export function  getBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
}