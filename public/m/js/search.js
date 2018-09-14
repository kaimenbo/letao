$(function(){
    var keyArr = [];
    // ��������ť��ӵ���¼�
    $('#search-btn').on('click', function(){
        // ��ȡ�û�����Ĺؼ���
        // �ж��Ƿ�ȷʵ������ û������ֹ��ת ���Ҹ�����ʾ
        // ��������ת���������ҳ�� ���Ҵ���ȥ�ؼ���
        var keyword = $('#search-txt').val();
        if($.trim(keyword)){

            // ������Ĺؼ��ִ洢������
            keyArr.unshift(keyword);
            //�ؼ�������洢������
            localStorage.setItem('keyArr', JSON.stringify(keyArr));
            // ��ת
            location.href = 'search-result.html?keyword=' + keyword;

        }else{
            alert('��������Ʒ�ؼ���');
        }
    });

    // ʵ�ֹؼ��ִ洢
    if(localStorage.getItem('keyArr')){
        keyArr = JSON.parse(localStorage.getItem('keyArr'));
        var html = template('historyTpl', {data: keyArr});
        $('#historyBox').html(html);
    }

    // ʵ�������ʷ��¼

    $('#clear-btn').on('click', function(){
        $('#historyBox').html("");
        localStorage.removeItem('keyArr');
        keyArr = [];
    })
});