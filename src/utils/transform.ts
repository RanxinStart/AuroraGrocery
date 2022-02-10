export const objectKeyValueExchange = <T extends object>(obj:T) => {
    const keys = Object.keys(obj)
    const values = Object.values(obj)
    return values.reduce((old,val,index)=>{
        old[val] = keys[index]
        return old
    },{})
}