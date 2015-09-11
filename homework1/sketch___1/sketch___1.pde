void setup(){
  size(600,500);
  }


void draw()
{   background(255);
    for(int i = 15; i < 46; i++)
    {line(i*2,0,i*2,400);
    }
    for(int q = 0; q < 201; q++)
    {line(100,q*2,160,q*2);
    }
    for(int a = 0; a < 16; a++)
    {line(170,a*4,170+a*4,0);
    }
    for(int b = 16; b < 101; b++)
    {line(170,b*4,230,b*4-60);
    }
    for(int c = 1; c < 16; c++)
    {line(170+c*4,400,230,340+c*4);
    }
    for(int r = 0; r < 16; r++)
    {line(240+r*4,0,300,60-r*4);
    }
    for(int t = 1; t < 85; t++)
    {line(240,t*4,300,60+t*4);
    }
    for(int y = 0; y < 16; y++)
    {line(240,340+y*4,300-y*4,400);}
  }