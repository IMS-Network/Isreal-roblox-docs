---
sidebar_position: 5
---

# לולאות

## לולאת for

לולאת `for` משמשת לביצוע קוד מספר פעמים מוגדר.

```lua
for i = 1, 5 do
    print("זהו סבב מספר " .. i)
end
```

## לולאת while

לולאת `while` מבצעת קוד כל עוד תנאי מסוים הוא נכון (true).

```lua
local count = 1
while count <= 5 do
    print("זהו סבב מספר " .. count)
    count = count + 1
end
```

## לולאת repeat

לולאת `repeat` דומה ל-`while`, אך התנאי נבדק בסוף כל סבב, מה שמבטיח שהלולאה תבוצע לפחות פעם אחת.

```lua
local count = 1
repeat
    print("זהו סבב מספר " .. count)
    count = count + 1
until count > 5
```