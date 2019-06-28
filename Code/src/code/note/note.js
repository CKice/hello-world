/*
 *********第二章
*/
/*指定绘图区域的背景色 默认0,0,0,0
  *r:0.0 - 1.0
  *g:0.0 - 1.0
  *b:0.0 - 1.0
  *a:0.0 - 1.0
*/
gl.clearColor(r, g, b, a);
/*指定深度缓冲区 默认1.0
 *depth
*/
gl.clearDepth(depth)
/*指定模板缓冲区 默认0
 *s
*/
gl.clearStencil(s);
/*清空绘图区域
 * buffer：gl.COLOR_BUFFER_BIT //颜色缓冲区
           gl.DEPTH_BUFFER_BIT //深度缓冲区
           gl.STENCIL_BUFFER_BIT //模板缓冲区 比较少用
*/
gl.clear(buffer) //buffer值

/*顶点着色器*/
var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +  //定义attribute变量
    'void main() {\n' +
    '  gl_Position = a_Position;\n' +
    '  gl_PointSize = 10.0;\n' +
    '}\n';        //每行以\n结束，这是由于当着色器内部出错时，就能获取出错的行号
gl_Position = vec4(0.0, 0.0, 0.0, 1.0);  // Set the vertex coordinates of the point
gl_PointSize = 10.0
/* Get the storage location of a_Position*/
var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
//给attribute赋值
gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0); // vertexAttrib1f / vertexAttrib2f /vertexAttrib4f

/*片元着色器*/
var FSHADER_SOURCE =
    'precision mediump float;\n' +   //precision精度限定词 中等
    'uniform vec4 u_FragColor;\n' +  // uniform変数
    'void main() {\n' +
    '  gl_FragColor = u_FragColor;\n' +
    '}\n';

gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0)
/*获取uniform地址*/
var u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
/*给uniform赋值*/
gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);  //4(1,2,3)


/*
 *********第三章
*/
/*创建缓冲区对象*/
var vertexBuffer = gl.createBuffer();  // => null || !null
/*删除缓冲区对象
** buffer : vertexBuffer 缓冲区对象
*/
//gl.deleteBuffer(vertexBuffer)
if (!vertexBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
}
/*绑定缓冲区
 *target ：gl.ARRAY_BUFFER 缓冲区对象包含了顶点的数据
           gl.ELEMENT_ARRAY_BUFFER 缓冲区对象包含了顶点的索引值
 *beffer : vertexBuffer 之前创建的缓冲区对象
*/
gl.bindBuffer(target, beffer);   // => viod
/*类型化数组
 *类型           所占字节数         描述
  Int8Array      1                 8位整型数
  Uint8Array     1                 8位无符号整型数
  Int16Array     2                 16位整型数
  Uint16Array    2                 16位无符号整型数 
  Int32Array     4                 32位整型数
  Uint32Array    4                 32位无符号整型数 
  Float32Array   4                 单精度32位浮点数
  Float64Array   8                 双精度64位浮点数
  get(index)             获取第index个元素值
  set(index,value)       设置第index个元素的值为value
  set(index,value)       从第offset个元素开始将数组array中的值填充进去
  length                 数组的长度
  BYTES_PER_ELEMENT      数组中每个元素所占的字节数    
*/
var vertices = new Float32Array([0.0, 0.5, -0.5, -0.5, 0.5, -0.5]);
/*向缓冲区写入数据
 *target ：gl.ARRAY_BUFFER 
           gl.ELEMENT_ARRAY_BUFFER
 *data : vertices 写入缓冲区对象的数据（类型化数组）
 *usage ：gl.STATIC_DRAW 只会向缓冲区对象中写入一次数据，但需要绘制很多次（如何使用存储在缓冲区对象中的数据）
          gl.STREAM_DRAW 只会向缓冲区对象中写入一次数据，然后绘制若干次
          gl.DYNAMIC_DRAW 会向缓冲区对象中写入多次数据，并绘制很多次
*/
gl.bufferData(target, data, usage);
/*将缓冲区对象分配给attribute变量
 *location ：a_Position 指定待分配attribute变量的存储地址
 *size : 指定缓冲区中每个顶点的分量个数（1-4）,若size小于attribute变量需要的分量数，缺失分量按与vertexAttrib[1234]f()相同规则补全
 *type : gl.UNSIGNED_BYTE  无符号字节,Uint8Array
         gl.SHORT          短整型，Int16Array
         gl.UNSIGNED_SHORT 无符号短整型，Uint16Array
         gl.INT            整型，Int32Array
         gl.UNSIGNED_INT   无符号整型，Uint32Array
         gl.FLOAT          浮点型，Float32Array
 *normalized : true或false,是否将非浮点型的数据归一到[0,1]或[-1,1]区间
 *stride ： 指定相邻两个顶点间的字节数，默认0
 *offset ： 指定缓冲区对象中的偏移量（以字节为单位）,即attribute变量从缓冲区中的何处开始存储
*/
gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0);  // => void
/*开启attribute变量，（开启后无法使用gl.vertexAttrib[1,2,3,4]f()向attribute传数据）  
 *location ： attribute变量的存储位置
*/
gl.enableVertexAttribArray(a_Position);
/*关闭attribute变量*/
gl.disableVertexAttribArray(location)
/*绘制图形
 *mode : gl.POINTS
         gl.LINES
         gl.LINE_STRIP
         V0     v2     v4   
          \    / \    / \
           \  /   \  /   \
            V1     V3     V5
         gl.LINE_LOOP
         V0     v2     v4     V0
          \    / \    / \       *
           \  /   \  /   \       *
            V1     V3     V5      V5
         gl.TRIANGLES (v0,v1,v2),(v3,v4,v5)...
         V0-----V2     V4   
          \    /      / \
           \  /      /   \
            V1     V3-----V5
         gl.TRIANGLE_STRIP (v0,v1,v2)(v2,v1,v3)...
         V0-----v2-----v4   
          \    / \    / \
           \  /   \  /   \
            V1-----V3-----V5
         gl.TRIANGLE_FAN   (v0,v1,v2)(v0,v2,v3)---(v0,v3,v4)
                   v2
				  /| \
                V3 |  V1
                |\ |  /  
			    | \| /
			    V4-V0
 *first : 指定从那个顶点绘制
 *count ：指定绘制需要用到多少个顶点
*/
gl.drawArrays(gl.POINTS, 0, n);

/*旋转三角形*/
x1 = x0 * cosβ - y0 * sinβ
y1 = x0 * sinβ + y0 * cosβ

var ANGLE = 90
var radian = Math.PI * ANGLE / 180.0; // 转换为弧度
var cosB = Math.cos(radian);
var sinB = Math.sin(radian);
/*旋转矩阵 按列*/
var xformMatrix = new Float32Array([             //按行 B旋转角度 x,y,z平移量
    cosB, sinB, 0.0, 0.0,                        //cosB -sinB 0 x
    -sinB, cosB, 0.0, 0.0,                       //sinB cosB  0 y 
    0.0, 0.0, 1.0, 0.0,                          //0    0     1 z
    0.0, 0.0, 0.0, 1.0                           //0    0     0 1
]);
/*平移矩阵 按列*/
var xformMatrix = new Float32Array([
    0, 0, 0.0, 0.0,
    0, 0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    x, y, z, 1.0
]);
/*缩放矩阵 按列*/
var xformMatrix = new Float32Array([
    Sx, 0.0, 0.0, 0.0,
    0.0, Sy, 0.0, 0.0,
    0.0, 0.0, Sz, 0.0,
    0.0, 0.0, 0.0, 1.0
]);
/*将4X4矩阵分配给指定的uniform变量  在webgl和OpenGL中矩阵是按列主序
 * location：uniform变量的存储位置
 * Transpose：在webgl中必须为false 表示是否倒置矩阵，webgl中没有提供倒置
 * array：待传输的类型化数组
*/
gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);


/*
 *********第四章
*/
/*Matrix4对象所支持的方法和属性*/
Matrix4.setIdentity()            //将Matrix4实例初始化为单位阵
Matrix4.setTranslate(x, y, z)    //将Matrix4实例初始化为平移变换阵，参数为各分量的偏移量
Matrix4.setRotate(angle, x, y, z)//将Matrix4实例初始化为旋转变换阵，角度为angle，旋转轴(x,y,z)无需归一化
Matrix4.setScale(x, y, z)        //将Matrix4实例初始化为缩放变换阵
Matrix4.translate(x, y, z)       //将Matrix4实例乘以一个平移变换阵，参数为各分量的偏移量
Matrix4.rotate(angle, x, y, z)   //将Matrix4实例乘以一个旋转变换阵，角度为angle，旋转轴(x,y,z)无需归一化
Matrix4.scale(x, y, z)           //将Matrix4实例乘以一个缩放变换阵
Matrix4.set(m)                   //将Matrix4实例设置为吗，m也必须是Matrix4实例
Matrix4.elements                 //类型化数组,Matrix4实例的矩阵元素
requestAnimationFrame();
cancelAnimationFrame();

/**
 *********第五章
*/
var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'attribute vec4 a_Color;\n' +
    'varying vec4 v_Color;\n' +   //传递变量
    'void main() {\n' +
    '  gl_Position = a_Position;\n' +
    '  v_Color = a_Color;\n' +
    '}\n';

// Fragment shader program
var FSHADER_SOURCE =
    'precision mediump float;\n' +
    'varying vec4 v_Color;\n' +
    'void main() {\n' +
    '  gl_FragColor = v_Color;\n' +
    '}\n';

/**
 * 加载纹理
 **/
var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'attribute vec2 a_TexCoord;\n' +
    'varying vec2 v_TexCoord;\n' +
    'void main() {\n' +
    '  gl_Position = a_Position;\n' +
    '  v_TexCoord = a_TexCoord;\n' +
    '}\n';

// Fragment shader program
var FSHADER_SOURCE =
    'precision mediump float;\n' +
    'uniform sampler2D u_Sampler;\n' +
    'varying vec2 v_TexCoord;\n' +
    'void main() {\n' +
    '  gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n' +
    '}\n';
//1.顶点着色器接收顶点的纹理坐标，光栅化后传递给片元着色器。
//2.片元着色器根据片元的纹理坐标，从纹理图像中抽取出纹素颜色赋给当前片元。
//3.设置顶点的纹理坐标
var verticesTexCoords = new Float32Array([
    // Vertex coordinates, texture coordinate
    -0.5, 0.5, 0.0, 1.0,
    -0.5, -0.5, 0.0, 0.0,
    0.5, 0.5, 1.0, 1.0,
    0.5, -0.5, 1.0, 0.0,
]);
var a_TexCoord = gl.getAttribLocation(gl.program, 'a_TexCoord');
if (a_TexCoord < 0) {
    console.log('Failed to get the storage location of a_TexCoord');
    return -1;
}
var FSIZE = verticesTexCoords.BYTES_PER_ELEMENT;
//将纹理坐标分配给a_TexCoord并开启
gl.vertexAttribPointer(a_TexCoord, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
gl.enableVertexAttribArray(a_TexCoord);  // Enable the assignment of the buffer object
//4.准备带加载的纹理图像，令浏览器读取它
//创建纹理对象
var texture = gl.createTexture();
// Delete a texture object 
//gl.deleteTexture(texture)
// Get the storage location of u_Sampler
var u_Sampler = gl.getUniformLocation(gl.program, 'u_Sampler');
//5监听纹理图像的加载事件，加载完成就在webgl中使用纹理
var image = new Image();  // Create the image object
if (!image) {
    console.log('Failed to create the image object');
    return false;
}
// Register the event handler to be called on loading an image
image.onload = function () { loadTexture(gl, n, texture, u_Sampler, image); };
// Tell the browser to load an image
image.src = '../resources/sky.jpg';

function loadTexture(gl, n, texture, u_Sampler, image) {
    /**
     * Flip the image's y axis 对纹理图像进行Y轴反转
     * pname: gl.UNPACK_FLIP_Y_WEBGL            进行Y轴反转    
     *        gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL 将RGB的每一个分量乘以A，默认值为false
     * param: 指定非0（true）或0(false),必须为整数
     * */
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
    /**
     * ———————————>x           t
     * |                       ↑
     * |                       | 
     * |                       |
     * ↓                       |
     * y                       ———————————>s
    */
    /**
     * Enable texture unit
     * texUnit：指定准备激活的纹理单元：gl.TEXTURE0、gl.TEXTURE0...gl.TEXTURE7.最后的数字代表单元的编号
    */
    gl.activeTexture(gl.TEXTURE0);
    /** 
     * Bind the texture object to the target
     * target ：gl.TEXTURE_2D(二维纹理) 或 gl.TEXTURE_CUBE_MAP(立方体纹理)
     * textur ：表示绑定的纹理单元
    */
    gl.bindTexture(gl.TEXTURE_2D, texture);

    /**
     * 将param的值赋给绑定到目标的纹理对象的pname参数上
     * target ： gl.TEXTURE_2D 或 gl.TEXTURE_CUBE_MAP
     * pname  ： gl.TEXTURE_MAG_FILTER（纹理的放大滤镜）
     *           gl.TEXTURE_MIN_FILTER（纹理的缩小滤镜）
     *           gl.TEXTURE_WRAP_S     (水平填充方法)
     *           gl.TEXTURE_WRAP_T     (垂直填充方法)
     * param  ： 放大参数 gl.LINEAR (default value),
     *                   gl.NEAREST
     *           缩小    gl.LINEAR, gl.NEAREST, 
     *                   gl.NEAREST_MIPMAP_NEAREST,
     *                   gl.LINEAR_MIPMAP_NEAREST, 
     *                   gl.NEAREST_MIPMAP_LINEAR (default value),
     *                   gl.LINEAR_MIPMAP_LINEAR
     *           水平垂直 gl.REPEAT (default value) 平铺
     *                    gl.CLAMP_TO_EDGE,        镜像对称
     *                    gl.MIRRORED_REPEAT.      是用边缘值
    */
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    /**
     * 将
    */
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);

    // Set the texture unit 0 to the sampler
    gl.uniform1i(u_Sampler, 0);

    gl.clear(gl.COLOR_BUFFER_BIT);   // Clear <canvas>

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, n); // Draw the rectangle
}

