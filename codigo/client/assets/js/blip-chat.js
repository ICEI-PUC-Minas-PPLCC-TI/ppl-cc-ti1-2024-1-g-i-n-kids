(function () {
    window.onload = function () {
        new BlipChat()
            .withAppKey(
                'dGVjaGJ1ZGR5OjkyMmFhZDgzLWYzMzgtNGQzZS1iYzlhLThjMjZhMWM3YzgxOA=='
            )
            .withButton({ color: '#FF6D28', icon: '' })
            .withCustomCommonUrl(
                'https://artur-bomtempo-colen-sm5gj.chat.blip.ai/'
            )
            .build();
    };
})();
