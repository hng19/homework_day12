// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false

// Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

// Ví dụ:

// checkStringExist(“i love you”, “you”) => true
// checkStringExist(“i love you”, “hate”) => false

function checkStringExist(str,subStr){
        return str.includes(subStr)
}
console.log(checkStringExist("i love you","you"))

// Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên

// Ví dụ:

// shortenString(“Xin chào các bạn”) => “Xin chào…”
// shortenString("hello’) => “hello”

function shortenString(str){
    if(str.length<=8){
        return str
    }else{
        return str.slice(0,9)+"..."
    }
}
console.log(shortenString("xin chào các bạn"))

// Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.

// Ví dụ

// “Race car” => true,
// “hello world” => false.

function checkSymmetricString(str){

    let string = str
    string = string.replace(/ /g, "")
    string = string.toLowerCase()
    let reverse_string=""
    for (let i= string.length -1;i>=0;i--){
        reverse_string+=string[i]
    }
    if(string == reverse_string){
        return true
    } else{
        return false
    }
}

console.log(checkSymmetricString("Race car"))
// Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

// Ví dụ

// 53751 -> 13557
// 14350 -> 10345
// 203950 -> 200359
function sortNumber(number){
    let string = number.toString()
    let arr =string.split("")
    let arrSort =arr.sort()
    let stringConvert = arrSort.join("")
    let res=""
    for(let i=0;i< stringConvert.length; i++){
        if(stringConvert[i] !="0"){
        res = stringConvert[i] + stringConvert.slice(0,i)+stringConvert.slice(i+1)
        break
    }
}
return Number(res)
}
console.log(sortNumber(235930))


// Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

// Ví dụ:

// “HELLO world” => “hello_world”
// “Xin Chào Các BẠN” => “xin_chào_các_bạn”

function convertToSnakeCase(str){
    return str.toLowerCase().replaceAll(" ","_")
}

console.log(convertToSnakeCase("Xin chào các bạn"))