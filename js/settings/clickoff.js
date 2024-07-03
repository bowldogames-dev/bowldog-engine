const onButton = document.getElementById('onButton');
        const offButton = document.getElementById('offButton');

        function setOnBeforeUnload() {
            window.onbeforeunload = function() {
                return 'R U Sure you want to leave?';
            };
        }

        function removeOnBeforeUnload() {
            window.onbeforeunload = null;
        }

        if (localStorage.getItem('onbeforeunload') === 'on') {
            setOnBeforeUnload();
        } else {
            removeOnBeforeUnload();
        }

        onButton.addEventListener('click', () => {
            setOnBeforeUnload();
            localStorage.setItem('onbeforeunload', 'on');
            console.log('script is enabled');
        });

        offButton.addEventListener('click', () => {
            removeOnBeforeUnload();
            localStorage.setItem('onbeforeunload', 'off');
            console.log('scripts is disabled');
        });