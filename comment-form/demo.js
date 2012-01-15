window.addEvent('domready', function(){
    
    new Jx.Layout('comment-form-container').resize();
    
    new Jx.Container({
        parent: 'comment-form-container',
        items: [{
            'class': 'form',
            options: {
                name: 'commentForm',
                id: 'commentForm',
                action: 'somepage.php',
                formClass: 'jxFormBlock',
                items: [{
                    //name
                    'class': 'text',
                    options: {
                         label: 'Name',
                         name: 'author',
                         id: 'author',
                         required: true
                    }
                },{
                    //email
                    'class': 'text',
                    options: {
                        label: 'Email',
                        name: 'email',
                        id: 'email',
                        required: true
                    }
                },{
                    //website
                    'class': 'text',
                    options: {
                        label: 'Website',
                        name: 'url',
                        id: 'url',
                        required: true
                    }
                },{
                    //comment
                    'class': 'editor',
                    options: {
                        name: 'description',
                        label: 'Description',
                        id: 'description',
                        required: true,
                        value: '',
                        editorOptions: {
                            buttons: [
                                ['bold', 'italic', 
                                'underline', 'strikethrough', 
                                'separator', 'alignment',
                                'separator', 'orderedlist', 
                                'unorderedlist', 'indent', 
                                'outdent', 'separator', 
                                'undo', 'redo'
                                ],[
                                  'block', 'link',
                                  'unlink', 'image',
                                  'separator', 'toggle'
                                ]
                            ]
                        }
                    }
                },{
                    'class': 'button',
                    options: {
                        buttonOptions: {
                            label: 'Submit Comment',
                            id: 'submit-comment'
                        }
                    }
                }],
                plugins: [{
                    name: 'validator',
                    options: {
                        fields: {
                            'author': {
                                validators: ['minLength:5', 'maxLength:30']
                            },
                            'email': {
                                validators: ['validate-email']
                            },
                            'url': {
                                validators: ['validate-url']
                            },
                            'description': {
                                validators: []
                            }
                        }
                    }
                },{
                    name: 'notifier',
                    options: {
                        notifierType: 'inline'
                    }
                }]
            }
        }]
    });
    
    $jx('submit-comment').addEvent('click',function(){
        var form = $jx('commentForm');
        if (form.isValid()) {
            form.ajaxSubmit();
        }
    });
});