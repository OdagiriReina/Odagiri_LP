$(function(){
        
    //フォーム指定
    $('form').validate({

        //検証ルール設定
        rules: {
            name: {
                required: true,
                minlength: 2,
                ValidateName: true,
            },
            email: {
                required: true,
                minlength: 7,
            },
            tel: {
                required: true,
                digits: true,
                minlength: 7,
            }
        },

        //エラーメッセージ設定
        messages: {
            name: {
                required: '名前を入力してください',
                minlength: '2文字以上で入力してください',
            },
            email: {
                required: 'メールアドレスを入力してください',
                minlength: '7文字以上で入力してください',
            },
            tel: {
                required: '電話番号を入力してください',
                digits: '整数を入力してください',
                minlength: '7文字以上で入力してください',
            }

        },
        //エラーメッセージ出力箇所設定
        errorPlacement: function(error, element){
            error.insertAfter(element);
          },
          debug: true
    });

    jQuery.validator.addMethod(
        "ValidateName",
        function(val,elem){
          reg = new RegExp("^[0-9a-zA-Zぁ-んー]+$");
          return this.optional(elem) || reg.test(val);
        },
        "名前が正しくありません"
    );

});