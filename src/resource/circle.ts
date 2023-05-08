export class Circle{

    x: number;
    y: number;
    min: number;
    max: number;
    color: string;

    constructor(
        x:number, y:number, min:number, color: string,
        ){
        this.x = x;
        this.y = y;
        this.min = min;
        this.color = color;
        this.max = this.getMax();
    }

    draw(ctx: CanvasRenderingContext2D){
        console.log(this.min)
        ctx.beginPath();
        ctx.strokeStyle = this.color; 
        ctx.arc(this.x , this.y , (this.min/this.x), this.toRadian(0), this.toRadian(360) , true );
        ctx.stroke();
    }

    getMax() {
        const max = Math.floor(Math.random()*5)+1.4
        return max;
    }

    toRadian = (d:number) => {
        return (d * Math.PI) / 180;
    }
}