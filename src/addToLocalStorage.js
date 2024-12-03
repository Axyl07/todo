export default function addToLocal(item)
{
    const stringItem = JSON.stringify(item);
    localStorage.setItem(stringItem, stringItem);
}