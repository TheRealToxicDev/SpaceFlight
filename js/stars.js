import Util from "./util";

class Star {
    
    constructor(ctx, speed, x = 300, y = 300) {
        
        this.ctx = ctx;
        this.speed = speed;

        this.util = new Util();

        /**
         * GET THE BASE X AND Y POSITION OF THE STAR
         */
        this.xDir = this.util.makePosOrNeg(Math.random());
        this.yDir = this.util.makePosOrNeg(Math.random());

        /**
         * MAGNITUDE BASED ON THE STARS X AND Y POSITION
         */
        this.magnitude = Math.hypot(this.xDir, this.yDir);

        /**
         * CREATE THE FINAL X AND Y POSITION FOR THE STAR
         */
        this.curX = x;
        this.curY = y;

    }

    drawStar() {

        const ctx = this.ctx;

        /**
         * SET THE OPACITY OF THE STARS IN THE SKY
         */
        const opacity = Math.hypot(Math.abs(this.curX - 300), Math.abs(this.curY - 300)) / 300;

        ctx.beginPath();

        ctx.strokeStyle = `rgba(200, 200, 200, ${opacity})`;

        ctx.lineTo(this.curX, this.curY);

        this.curX += this.xDir / this.magnitude;

        this.xDir += this.speed;

        this.curY += this.yDir / this.magnitude;

        this.yDir += this.speed;

        ctx.lineTo(this.curX, this.curY);

        ctx.stroke();
    }

    /**
     * RENDER THE STARS ON THE GAME MAP!
     */
    render() {
        this.drawStar();
    }
}

export default Star;