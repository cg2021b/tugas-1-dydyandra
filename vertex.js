function sin(a){
    return Math.sin(Math.PI * a);
    }
    
function cos(a){
    return Math.cos(Math.PI * a);
}

function gelasKiri(){
    var kiri = [];
    let A,B,C,D,E;
    
    // gelas bagian atas terluar
    for(var i = 0; i<=180; i+=1)
    {
        let j = (i + 270) / 180;
        let k = (i + 1 + 270) / 180;

        var vertex_1 = [
            sin(j) * 0.270 - 0.5 , cos(j) * 0.05 + 0.5, // x and y 
            0.88, 0.87, 0.87, // color
        ];
    
        var vertex_2 = [
            -0.5, 0.5, // x and y
            0.88, 0.87, 0.87, // color
        ];

        var vertex_3 = [
            sin(k) * 0.270 - 0.5 , cos(k) * 0.05 + 0.5, // x and y
            0.88, 0.87, 0.87, // color
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }

    // setengah lingkaran gelas bagian bawah
    for(var i = 90; i<=270; i+=1)
    {
        var j = i / 180;
        var k = (i+1) / 180;
        var vertex_1 = [
            sin(j) * 0.220 - 0.5 , cos(j) * 0.15 - 0.1, 
            0.88, 0.87, 0.87,
        ];

        var vertex_2 = [
            -0.5, -0.05, 
            0.88, 0.87, 0.87,
        ];

        var vertex_3 = [
            sin(k) * 0.220 - 0.5 , cos(k) * 0.15 - 0.1,
            0.88, 0.87, 0.87,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }

    A = kiri.slice(180*5*3, 180*5*3+5);
    B = kiri.slice(181*5*3, 181*5*3+5);
    C = kiri.slice(5, 10);
    D = kiri.slice(361*5*3, 361*5*3+5);
    E = kiri.slice(0*5*3, 0*5*3+5);

    kiri = kiri.concat(A, B, C);
    kiri = kiri.concat(B, C, D);
    kiri = kiri.concat(C, D, E);

    // lingkaran gelas atas yang dalam
    for(var i = 0; i<=180; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i + 271) / 180;

        var vertex_1 = [
            sin(j) * 0.260 - 0.5 , cos(j) * 0.05 + 0.5, 
            0.78, 0.78, 0.78,
        ];
    
        var vertex_2 = [
            -0.5, 0.5, 
            0.78, 0.78, 0.78,
        ];

        var vertex_3 = [
            sin(k) * 0.220 - 0.5 , cos(k) * 0.05 + 0.5,
             0.78, 0.78, 0.78,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }

    for(var i = 90; i<=360; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i+ 271) / 180;

        var vertex_1 = [
            sin(j) * 0.250 - 0.5 , cos(j) * 0.05 + 0.5, 
            0.78, 0.78, 0.78,
        ];
    
        var vertex_2 = [
            -0.5, 0.5, 
            0.78, 0.78, 0.78,
        ];

        var vertex_3 = [
            sin(k) * 0.250 - 0.5 , cos(k) * 0.05 + 0.5, 
            0.78, 0.78, 0.78,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }

    // dalam gelas bagian bawah
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.220- 0.5 , cos(j) * 0.05 - 0.05, 
            0.78, 0.78, 0.78,
        ];

        var vertex_2 = [
            -0.5, -0.05, 
            0.78, 0.78, 0.78,
        ];

        var vertex_3 = [
            sin(k) * 0.220 - 0.5 , cos(k) * 0.05 - 0.05, 
            0.78, 0.78, 0.78,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)  / 180;
        var k = (i+1 + 180)  / 180;
        var vertex_1 = [
            sin(j) * 0.220 - 0.5 , cos(j) * 0.05 - 0.05, 
            0.78, 0.78, 0.78,
        ];

        var vertex_2 = [
            -0.5, -0.05, 
            0.78, 0.78, 0.78,
        ];

        var vertex_3 = [
            sin(k) * 0.220 - 0.5 , cos(k) * 0.05 - 0.05, 
            0.78, 0.78, 0.78,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }

    return kiri;
    
}

function gelasKanan(){
    var kanan = [];
    let A,B,C,D,E;
    
    // gelas atas bagian luar
    for(var i = 0; i<=180; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i+ 271) / 180;
        var vertex_1 = [
            sin(j) * 0.290 + 0.5 , cos(j) * 0.10 + 0.5, 
            0.88, 0.87, 0.87,
        ];
    
        var vertex_2 = [
            0.5, 0.5, 
            0.88, 0.87, 0.87,
        ];
    
        var vertex_3 = [
            sin(k) * 0.290 + 0.5 , cos(k) * 0.10 + 0.5, 
            0.88, 0.87, 0.87,
        ];
    
        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    
    
    // gelas bawah bagian luar
    for(var i = 90; i<=270; i+=1)
    {
        var j = i   / 180;
        var k = (i+1)   / 180;
        var vertex_1 = [
            sin(j) * 0.220 + 0.5 , cos(j) * 0.15 - 0.05, 
            0.88, 0.87, 0.87,
        ];
    
        var vertex_2 = [
            0.5, -0.05, 
            0.88, 0.87, 0.87,
        ];
    
        var vertex_3 = [
            sin(k) * 0.220 + 0.5 , cos(k) * 0.15 - 0.05, 
            0.88, 0.87, 0.87,
        ];
    
        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    
    A = kanan.slice(180*5*3, 180*5*3+5);
    B = kanan.slice(181*5*3, 181*5*3+5);
    C = kanan.slice(5, 10);
    D = kanan.slice(361*5*3, 361*5*3+5);
    E = kanan.slice(0*5*3, 0*5*3+5);
    
    kanan = kanan.concat(A, B, C);
    kanan = kanan.concat(B, C, D);
    kanan = kanan.concat(C, D, E);
    
    
    for(var i = 0; i<=180; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i+ 271) / 180;
        var vertex_1 = [
            sin(j) * 0.280 + 0.5 , cos(j) * 0.10 + 0.5, 
            0.78, 0.78, 0.78,
        ];
    
        var vertex_2 = [
            0.5, 0.5, 
            0.78, 0.78, 0.78,
        ];
    
        var vertex_3 = [
            sin(k) * 0.280 + 0.5 , cos(k) * 0.10 + 0.5, 
            0.78, 0.78, 0.78,
        ];
    
        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    
    // gelas bagian atas dalam
    for(var i = 90; i<=450; i+=1)
    {
        var j = (i + 180) / 180;
        var k = (i+ 181) / 180;
        var vertex_1 = [
            sin(j) * 0.280 + 0.5 , cos(j) * 0.110 + 0.5, 
            0.78, 0.78, 0.78,
        ];
    
        var vertex_2 = [
            0.5, 0.5, 
            0.78, 0.78, 0.78,
        ];
    
        var vertex_3 = [
            sin(k) * 0.280 + 0.5 , cos(k) * 0.110 + 0.5, 0.78, 0.78, 0.78,
        ];
    
        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    
    // gelas bagian bawah dalam
    for(var i = 90; i<=270; i+=1)
    {
        var j = (i + 180)   / 180;
        var k = (i+1 + 180)   / 180;
        var vertex_1 = [
            sin(j) * 0.220 + 0.5 , cos(j) * 0.15 - 0.05, 
            0.78, 0.78, 0.78,
        ];
    
        var vertex_2 = [
            0.5, -0.05, 0.78, 0.78, 0.78,
        ];
    
        var vertex_3 = [
            sin(k) * 0.220 + 0.5 , cos(k) * 0.15 - 0.05, 
            0.78, 0.78, 0.78,
        ];
    
        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }

    // gelas bagian bawah luar (alas)
    for(var i = 0; i<=180; i+=1)
    {
        var j = (i + 90) / 180;
        var k = (i+ 91) / 180;

        var vertex_1 = [
            sin(j) * 0.200 + 0.5 , cos(j) * 0.15 - 0.1, 
            0.88, 0.87, 0.87,
        ];
    
        var vertex_2 = [
            0.5, -0.1, 
            0.88, 0.87, 0.87,
        ];
    
        var vertex_3 = [
            sin(k) * 0.200 + 0.5 , cos(k) * 0.15 - 0.1, 
            0.88, 0.87, 0.87,
        ];
    
        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }
    
    // gelas bagian bawah dalam 
    for(var i = 180; i<=450; i+=1)
    {
        var j = (i + 180)   / 180;
        var k = (i+1 + 180)   / 180;
        var vertex_1 = [
            sin(j) * 0.220 + 0.5 , cos(j) * 0.15 - 0.05, 
            0.78, 0.78, 0.78,
        ];
    
        var vertex_2 = [
            0.5, -0.05, 
            0.78, 0.78, 0.78,
        ];
    
        var vertex_3 = [
            sin(k) * 0.220 + 0.5 , cos(k) * 0.15 - 0.05, 
            0.78, 0.78, 0.78,
        ];
    
        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }

    return kanan;
}
