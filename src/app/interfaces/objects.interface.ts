export interface purchaseProduct {
  ID_PRODUCTO:number,
  ID_COMPRA:number,
  PRECIO_UNITARIO:number,
  DESCRIPCION:string,
  CANTIDAD:number
}

export interface Purchase {
  ID_USUARIO:number,
  ID_PROVEEDOR:number,
  ID_PAGO:number,
  OBSERVACION:string
}

export interface Sale {
  ID_PAGO:number,
  ID_USUARIO:number,
  ID_CLIENTE:number,
  DESCRIPCION: string
}

export interface Category {
  CATEGORIA : string,
  DESCRIPCION: string
}

export interface Product {
  ID_PROVEEDOR: number,
  NOMBRE: string,
  MARCA: string,
  DESCRIPCION: string,
  IMG: string,
  ESTADO: number,
  ID_CATEGORIA: number
}

export interface Object {
  OBJETO:string,
  TIPO_OBJETO:string,
  DESCRIPCION:string,
  CREADO_POR:number
}

export interface Permission {
  ID_OBJETO:number,
  ID_ROL:number,
  INSERTAR:number,
  ELIMINAR:number,
  ACTUALIZAR:number,
  CONSULTAR:number,
  CREADO_POR:number
}

export interface Role {
  ID_ROL: number,
  ROL:string,
  DESCRIPCION:string,
  FECHA_CREACION: string,
  CREADO_POR:number,
  FECHA_MODIFICACION: string,
  MODIFICADO_POR: number
}

export interface PayMethod {
  FORMA_PAGO:string,
  DESCRIPCION: string
}

export interface Parameter {
  ID_PARAMETRO:number,
  PARAMETRO:string,
  ID_USUARIO: number,
  VALOR:string,
}

export interface Bitacora {
  ID_BITACORA: number,
  ID_USUARIO: number,
  ID_OBJETO: number,
  ACCION: string,
  DESCRIPCION: string,
  INFORMACION_ANTERIOR: string,
  INFORMACION_ACTUAL: string,
  FECHA_BITACORA: string
}

export interface Comission {
  ID_USUARIO: number,
  ID_VENTA: number,
  TOTAL_VENTA: number,
  COMISION_EMPLEADO: number,
  USUARIO: string,
  CORREO_ELECTRONICO: string
}
