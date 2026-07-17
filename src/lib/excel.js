import * as XLSX from "xlsx";

export function readExcel(file){

return new Promise(resolve=>{

const reader=new FileReader();

reader.onload=e=>{

const workbook=XLSX.read(e.target.result,{
type:"binary"
});

const sheet=workbook.Sheets[
workbook.SheetNames[0]
];

resolve(XLSX.utils.sheet_to_json(sheet));

};

reader.readAsBinaryString(file);

});

}
