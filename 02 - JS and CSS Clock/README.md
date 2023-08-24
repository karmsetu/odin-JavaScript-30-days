# **Significance of `+90`**
```
    const secondDeg = (second/60)*360 + 90;
    const minuteDeg = (minute/60)*360 + 90;
    const hourDeg = (hour/24)*360 + 90;
```

the offset value of each hand is set to 90 deg 
to project the hands correctly, we need to increase the value by 90 degs to put each hand at the top center of the clock. 