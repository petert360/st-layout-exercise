'use strict';

            const user = {
                firstName: 'John',
                lastName: 'Doe',
                speak() {
                    console.log(this);
                    const looger = () => {
                        console.log(this);
                    };
                    looger();
                }
            };

            user.speak();