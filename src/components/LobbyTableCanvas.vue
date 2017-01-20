<template>
    <div class="wrapper">
        <canvas width="1122" height="242" ref="background_layer">
            CANVAS
        </canvas>
        <canvas width="1122" height="242" :id="table_id + 'canvas'" ref="cc">
            CANVAS
        </canvas>
    </div>

</template>

<script>
    import * as commands from '../constants/commands'
    // import NormalResult from './NormalResult'



    export default {
        name: 'lobby-table-canvas',
        data() {
            return {}
        },
        props: {
            table_id: String,
            results: Array
        },
        watch: {
            results: function (newVal) {
                //   console.log("results changes =----------" + newVal.join("-"))
                this.clearCanvas();
                if (newVal) {
                    var a = newVal;
                    if (newVal.length > 84) {
                        a = newVal.slice(Math.ceil((newVal.length - 84) / 6) * 6, newVal.lenth);
                        // console.log(Math.ceil((newVal.length - 84) / 6) * 6);
                        // console.log(a)
                    }

                    a.forEach(this.drawCircle);
                }
            }
        },
        components: {
            //   NormalResult
        },
        methods: {
            // drawCell: () => {

            // },
            clearCanvas: function () {
                var canvas = this.$refs.cc;
                if (canvas.getContext) {
                    var ctx = canvas.getContext('2d');
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }

            },
            drawCell: function () {
                var canvas = this.$refs.background_layer;
                if (canvas.getContext) {
                    var ctx = canvas.getContext('2d');
                    ctx.strokeStyle = "rgb(0,0,0)";
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    var y = 0.5;
                    var x = 0;
                    ctx.moveTo(x, y);
                    for (var i = 0; i < 13; i++) {
                        ctx.lineTo(canvas.width - 1, y);
                        y = 20 * (i + 1) + 0.5;
                        if (i % 2 == 0) {
                            x = 40 * 14;
                        }
                        else {
                            x = 0;
                        }
                        ctx.moveTo(x, y);
                    }
                    ctx.stroke();

                    x = 0.5;
                    ctx.moveTo(x, 0);
                    for (var i = 0; i < 15; i++) {
                        ctx.lineTo(x, canvas.height - 1);
                        x = 40 * (i + 1) + 0.5;
                        ctx.moveTo(x, 0);
                    }
                    console.log(x)
                    for (var i = 28; i < 57; i++) {
                        x = 20 * (i + 1) + 0.5;
                        ctx.moveTo(x, 0);
                        ctx.lineTo(x, canvas.height - 1);
                    }
                    ctx.stroke();
                }
            },
            drawCircle: function (item, index) {
                //console.log(index + ' ' + item);
                var canvas = this.$refs.cc;
                if (canvas.getContext) {
                    var ctx = canvas.getContext('2d');
                    ctx.save();

                    ctx.translate(Math.floor(index / 6) * 40, index % 6 * 40);

                    ctx.beginPath();
                    ctx.arc(20.5, 20.5, 16, 0, Math.PI * 2, true);

                    let r = item.split("|");
                    let result_text = "";
                    switch (r[0]) {
                        case "1":
                            result_text = "庄"
                            ctx.fillStyle = "rgb(255,0,0)";
                            break;
                        case "2":
                            result_text = "闲"
                            ctx.fillStyle = "dodgerblue";
                            break;
                        case "3":
                            result_text = "和"
                            ctx.fillStyle = "mediumseagreen";
                            break;
                        default:
                            ctx.restore();
                            return;
                            break;
                    }
                    ctx.fill();

                    // ctx.fillStyle = "white";
                    ctx.font = "bold 24px Microsoft JhengHei";
                    ctx.fillStyle = "white";
                    ctx.fillText(result_text, 8, 30);

                    switch (r[1]) {
                        case "1": //庄對
                            ctx.beginPath();
                            ctx.arc(7, 7, 5, 0, Math.PI * 2, true);
                            ctx.fillStyle = "white";
                            ctx.fill();
                            ctx.beginPath();
                            ctx.arc(7, 7, 4, 0, Math.PI * 2, true);
                            ctx.fillStyle = "red";
                            ctx.fill();
                            break;
                        case "2": //閒對
                            ctx.beginPath();
                            ctx.arc(34, 34, 5, 0, Math.PI * 2, true);
                            ctx.fillStyle = "white";
                            ctx.fill();
                            ctx.beginPath();
                            ctx.arc(34, 34, 4, 0, Math.PI * 2, true);
                            ctx.fillStyle = "dodgerblue";
                            ctx.fill();
                            break;
                        case "3": //莊閒對
                            ctx.beginPath();
                            ctx.arc(7, 7, 5, 0, Math.PI * 2, true);
                            ctx.fillStyle = "white";
                            ctx.fill();
                            ctx.beginPath();
                            ctx.arc(7, 7, 4, 0, Math.PI * 2, true);
                            ctx.fillStyle = "red";
                            ctx.fill();

                            ctx.beginPath();
                            ctx.arc(34, 34, 5, 0, Math.PI * 2, true);
                            ctx.fillStyle = "white";
                            ctx.fill();
                            ctx.beginPath();
                            ctx.arc(34, 34, 4, 0, Math.PI * 2, true);
                            ctx.fillStyle = "dodgerblue";
                            ctx.fill();
                            break;
                    }

                    ctx.restore();
                }


            },
        },
        created: function () {


        },
        mounted: function () {
            this.drawCell();

        },
    }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrapper {
        width:561px;
        height:121px;
        margin: 1px;
    }
    
    .inline-block {
        display: inline-block;
        margin: -3px;
    }
    
    canvas {
        width:561px;
        height:121px;
        position: absolute;
        left: 10px;
        top: 45px;
    }
</style>