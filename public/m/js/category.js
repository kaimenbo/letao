$(function(){
    // ��ʼ���������
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick ����ϵ����ϵ��Խ�󣬹����ٶ�Խ������������ԽС��Ĭ��ֵ0.0006
    });

    // һ���˵�
    $.ajax({
        url: '/category/queryTopCategory',
        type: 'get',
        success: function(response){

            var html=template('leftCate',{data:response.rows});
            $('.cate-first').html(html);

            // ���һ�����������ݵĻ�
            if(response.rows.length){
                // ����һ��һ���������ѡ��״̬
                $('.cate-first').find('a').eq(0).addClass('active');
                // ���ýӿڣ���ȡ����
                getSecondCategory(1);
            }

            // һ��������ӵ���¼�
            $('.cate-first').on('click', 'a', function(){
                // ��ȡ��ǰ�����id
                var id = $(this).data('id');

                $(this).addClass('active').siblings().removeClass('active');

                // ���ýӿڣ���ȡ����
                getSecondCategory(id);
            })
        }
    })
})

function getSecondCategory(id){
    $.ajax({
        url: '/category/querySecondCategory',
        type: 'get',
        data: {id: id},
        success: function(res){
            var html = template('rightCate', res);
            $('.category-right ul').html(html);

        }
    })
}