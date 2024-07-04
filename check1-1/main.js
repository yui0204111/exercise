// 要件：ユーザーを登録できる機能を作成します。

class User {
    // 名前とメールアドレスのプロパティを持ったコンストラクタを作成してください。
    constructer(name,email){
        this.name=name;
        this.email=email;
    }
}

// ユーザー情報を保存する配列を作成してください。
    const users =[];
// ユーザー情報を登録する関数を作成してください。
function registerUser() {
    // nameフィールドの値を取得してください
    const name =document.getElementById('name')
    // emailフィールドの値を取得してください。
    const email=document.getElementById('email')
    // 登録されているユーザーを取得してください。
    const existUser =users.find(user=>user.email===email);
    // メールアドレスの重複を確認してください。
    if(existUser){
        console.log(メールアドレスは既に登録されています)
    }else{
        const newUser =new User(name,email);
    }
    // 既に登録済みの場合、登録しようとしたメールアドレスをを含む重複している旨のメッセージを出力してください。
    // 未登録の場合はユーザー情報を配列に追加してください。    

    // 登録後にnameフィールドの値を削除してください
    document.getElementById('name').value='';
    // 登録後にemailフィールドの値を削除してください
    document.getElementById('email').value='';
}

// 登録されたユーザー情報を1件ずつコンソール出力する関数を作成してください。
function findUser() {
    
}