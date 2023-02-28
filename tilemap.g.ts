// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003030303030303030303030303030303030303030303030303030303030303030303030303030303030303010303030303030303030103030301010103030303030303010101010101010101030303030301010101010101010202010101010301010101010101010202020101010101010101010101010101020201010101010101010101010101010101010101010101010202010101010101010101010101010102020101010101010101020202010101020201010101010101010202020201010101010101010101010102020201010202020101010101010101010101010102020201010101010101010101010101020201010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . 2 . . . 2 2 . 2 . . . 
. . . 2 2 . 2 2 2 . . . 2 . . . 
2 2 2 . . . . . . . . . 2 2 2 . 
2 . . . . . . . . 2 2 . . . . 2 
. . . . . . . . 2 2 2 . . . . . 
. . . . . . . . . 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 . . . . . . . . . . . . 
. . 2 2 . . . . . . . . 2 2 2 . 
. . 2 2 . . . . . . . . 2 2 2 2 
. . . . . . . . . . . . 2 2 2 . 
. 2 2 2 . . . . . . . . . . . . 
. 2 2 2 . . . . . . . . . . . . 
. 2 2 . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
