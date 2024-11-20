import './footer.css'
import { useEffect } from 'react';

export default function Footer() {

    useEffect(() => {
        const c = document.createElement('canvas');
        c.id = "canvasBackground";
        const parent = document.querySelector('.footer-main');
        parent.appendChild(c);

        const ctx = c.getContext('2d');

        let dotCount;
        let dotArray = [];
        let radius, x, y;

        function createDots(dotCount) {
            for (let i = 0; i < dotCount; i++) {
                radius = Math.floor((Math.random() * 2) + 1);
                x = Math.random() * (c.width - radius * 2) + radius;
                y = Math.random() * (c.height - radius * 2) + radius;
                let xVelocity = ((Math.random() * 3) - 1.5) / 50;
                let yVelocity = ((Math.random() * 3) - 1.5) / 50;
                let fillColor = 'white';
                let shadowBlur = 10;
                let shadowColor = 'white';
                let globalAlpha = ((Math.random() * 5) + 5) / 10;
                dotArray.push(new Dot(radius, x, y, xVelocity, yVelocity, fillColor, shadowBlur, shadowColor, globalAlpha));
            }
            animate();
        }

        function Dot(r, x, y, xV, yV, fC, sB, sC, gA) {
            this.radius = r;
            this.x = x;
            this.y = y;
            this.xVelocity = xV;
            this.yVelocity = yV;
            this.fillColor = fC;
            this.shadowBlur = sB;
            this.shadowColor = sC;
            this.globalAlpha = gA;

            this.updateDots = function () {
                if (this.x + this.radius > c.width || this.x - this.radius < 0)
                    this.xVelocity = -this.xVelocity;
                if (this.y + this.radius > c.height || this.y - this.radius < 0)
                    this.yVelocity = -this.yVelocity;

                this.x += this.xVelocity;
                this.y += this.yVelocity;

                this.drawDots();
            };

            this.drawDots = function () {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.shadowBlur = this.shadowBlur;
                ctx.shadowColor = this.shadowColor;
                ctx.globalAlpha = this.globalAlpha;
                ctx.fillStyle = this.fillColor;
                ctx.fill();
            };
        }

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, c.width, c.height);

            for (let i = 0; i < dotArray.length; i++) {
                dotArray[i].updateDots();
            }
        }

        function setValues() {
            c.width = parent.offsetWidth;
            c.height = parent.offsetHeight;

            dotArray = [];
            dotCount = Math.floor((c.width / 2) * (c.height / 2) / 2000);
            createDots(dotCount);
        }

        setValues();

        window.addEventListener('resize', setValues);

        return () => {
            window.removeEventListener('resize', setValues);
        };
    }, []);

    return (
        <>
            <div className="footer-main">
                <h2>Thanks for Visiting</h2>
            </div>
        </>
    )
}
