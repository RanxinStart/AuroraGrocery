const moduleList:Record<string,any> = {}
moduleList.css =import.meta.globEager('./*.css')
moduleList.ts = import.meta.globEager('./*.ts')