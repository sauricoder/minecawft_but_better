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
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020202020202020202020202020202020202020202020202020202030202020202020202020302020203030302020202020202030303030303030303020202020203030303030303030101030303030203030303030303030101010303030303030303030303030303010103030303030303030303030303030303030303030303030101030303030303030303030303030301010303030303030303010101030303010103030303030303030101010103030303030303030303030301010103030101010303030303030303030303030301010103030303030303030303030303010103030303030303030303030303`, img`
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
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen);
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
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
