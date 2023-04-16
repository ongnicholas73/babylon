const canvas = document.getElementById("renderCanvas"); // Get the canvas element

const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

const createScene = function () {
  // Creates a basic Babylon Scene object
  const scene = new BABYLON.Scene(engine);

  // Creates and positions a free camera
  const camera = new BABYLON.ArcRotateCamera(
    "Camera",
    -Math.PI / 4,
    Math.PI / 3,
    12,
    BABYLON.Vector3.Zero(),
    scene
  );

  // Targets the camera to scene origin
  camera.setTarget(BABYLON.Vector3.Zero());
  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // Creates a light, aiming 0,1,0 - to the sky
  const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, 0),
    scene
  );
  // Dim the light a small amount - 0 to 1
  light.intensity = 0.7;

  const floor = BABYLON.MeshBuilder.CreateBox(
    "floor",
    {
      height: 0.01,
      width: 50,
      depth: 50,
    },
    scene
  );
  floor.position = new BABYLON.Vector3(0, -1.1, 0);

  const chair1 = createChair(scene);
  chair1.position = new BABYLON.Vector3(10,0.2,10)
  
  const bed1 = createBed(scene);
  bed1.position = new BABYLON.Vector3(-10,0,-10);
  bed1.rotate(BABYLON.Axis.Y, Math.PI/-2);

//   const sphere = BABYLON.MeshBuilder.CreateSphere(
//     "discoBall",
//     {
//         diameter: 1,
//     },
//     scene
//   );

BABYLON.SceneLoader.ImportMesh(
    "beep",
    "https://cdn.thingiverse.com/assets/2f/ef/34/33/8d/floating_submarine.stl?ofn=ZmxvYXRpbmdfc3VibWFyaW5lLnN0bA==",
    "",
    scene,
    ([submarine]) => {

        scene.onKeyboardObservable.add((kbInfo) => {
            if (kbInfo.type === BABYLON.KeyboardEventTypes.KEYDOWN) {
                if (kbInfo.event.key === "ArrowUp") {
                    box.position.y += 0.1;
                }
            }
        });

        // write code here
        submarine.rotate(BABYLON.Axis.Z, Math.PI*0)
        submarine.rotate(BABYLON.Axis.X, Math.PI*0)
        submarine.rotate(BABYLON.Axis.Y, Math.PI*0)
    },
    "stl"
);

  return scene;
};

const createChair = (scene) => {
  const seat = BABYLON.MeshBuilder.CreateBox(
    "seat",
    {
      height: 0.2,
      width: 3,
      depth: 3,
    },
    scene
  );
  seat.position = new BABYLON.Vector3(0, 1.2, 0);

  const leg1 = BABYLON.MeshBuilder.CreateBox(
    "leg1",
    {
      height: 2.5,
      width: 0.2,
      depth: 0.2,
    },
    scene
  );
  leg1.position = new BABYLON.Vector3(1.4, 0, 1.4);

  const leg2 = BABYLON.MeshBuilder.CreateBox(
    "leg2",
    {
      height: 2.5,
      width: 0.2,
      depth: 0.2,
    },
    scene
  );
  leg2.position = new BABYLON.Vector3(-1.4, 0, -1.4);

  const leg3 = BABYLON.MeshBuilder.CreateBox(
    "leg3",
    {
      height: 2.5,
      width: 0.2,
      depth: 0.2,
    },
    scene
  );
  leg3.position = new BABYLON.Vector3(1.4, 0, -1.4);

  const leg4 = BABYLON.MeshBuilder.CreateBox(
    "leg4",
    {
      height: 2.5,
      width: 0.2,
      depth: 0.2,
    },
    scene
  );
  leg4.position = new BABYLON.Vector3(-1.4, 0, 1.4);

  const backrest = BABYLON.MeshBuilder.CreateBox(
    "backrest",
    {
      height: 3,
      width: 3,
      depth: 0.2,
    },
    scene
  );
  backrest.position = new BABYLON.Vector3(0, 2.7, -1.4);

  const chair = BABYLON.Mesh.MergeMeshes(
    [backrest, leg1, leg2, leg3, leg4, seat],
    true,
    true
  );

  return chair;
};

const createBed = (scene) => {
    const woodbottom = BABYLON.MeshBuilder.CreateBox(
        "woodbottom",
        {
          height: 0.8,
          width: 14,
          depth: 7,
        },
        scene
      );
      woodbottom.position = new BABYLON.Vector3(0, 1.5, 0);
    
      const mattress = BABYLON.MeshBuilder.CreateBox(
        "mattress",
        {
          height: 0.8,
          width: 13,
          depth: 6.5,
        },
        scene
      );
      mattress.position = new BABYLON.Vector3(0.5, 2, 0);
    
      const bedleg1 = BABYLON.MeshBuilder.CreateBox(
        "bedleg1",
        {
          height: 3,
          width: 0.5,
          depth: 0.5,
        },
        scene
      );
      bedleg1.position = new BABYLON.Vector3(6.5, 0.4, -3);
    
      const bedleg2 = BABYLON.MeshBuilder.CreateBox(
        "bedleg2",
        {
          height: 3,
          width: 0.5,
          depth: 0.5,
        },
        scene
      );
      bedleg2.position = new BABYLON.Vector3(6.5, 0.4, 3);
    
      const bedleg3 = BABYLON.MeshBuilder.CreateBox(
        "bedleg3",
        {
          height: 3,
          width: 0.5,
          depth: 0.5,
        },
        scene
      );
      bedleg3.position = new BABYLON.Vector3(-6.5, 0.4, 3);
    
      const bedleg4 = BABYLON.MeshBuilder.CreateBox(
        "bedleg4",
        {
          height: 3,
          width: 0.5,
          depth: 0.5,
        },
        scene
      );
      bedleg4.position = new BABYLON.Vector3(-6.5, 0.4, -3);
    
      const bedback = BABYLON.MeshBuilder.CreateBox(
        "bedback",
        {
          height: 4,
          width: 1,
          depth: 7,
        },
        scene
      );
      bedback.position = new BABYLON.Vector3(-6.5, 3.5, 0);
    
      const bedfront = BABYLON.MeshBuilder.CreateBox(
        "bedfront",
        {
          height: 2.5,
          width: 1,
          depth: 7,
        },
        scene
      );
      bedfront.position = new BABYLON.Vector3(6.5, 2.5, 0);
    
      const pillow = BABYLON.MeshBuilder.CreateBox(
        "pillow",
        {
          height: 0.8,
          width: 2,
          depth: 5,
        },
        scene
      );
      pillow.position = new BABYLON.Vector3(-4.8, 2.5, 0);

      const bed = BABYLON.Mesh.MergeMeshes(
        [woodbottom, mattress, bedleg1, bedleg2, bedleg3, bedleg4, pillow, bedback, bedfront],
        true,
        true
      )

    return bed;
};

const scene = createScene(); //Call the createScene function
// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
  scene.render();
});
// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
  engine.resize();
});
