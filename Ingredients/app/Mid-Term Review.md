# Mid-Term Review
> + Ameya Karve - ameya.karve@gmail.com
> + ED09B036
> + Internship at Autodesk, Pune
> + Project Title: Boundary Representation generation from Meshes
> + Mentor: Mukund Ambardekar - mukund.ambardekar@autodesk.com

## Introduction
### Mesh Representation
+ Solid body represented as a mesh with triangular faces. 
+ More the number of triangles, more the accuracy of the model
+ Contains no parametric information about the body; Convenient for storing generic shapes
+ Does not contain any history about the model. 

### Boundary Representation (BRep) 
+ Body represented as a combination of simple parametric bodies and surfaces ( cubes, spheres, planes, spline surfaces etc.) , and operations (transformations, extrusion, lofting, boolean operations etc.) carried out on these. 
+ Can get complicated for complex shapes, usually exported to mesh representations
+ Editable bodies with history stored. 

## Project details: A big picture
### To generate a BRep body from a mesh for mechanical parts
+ Identify, segment different faces in the mesh body
+ Detect faces that match analytical surfaces, try to approximate others with spline patches. 
+ Generate a BREP Body for each face
+ Feed above bodies to the Stitcher to generate a single body. 
+ Optimize BREP body generation for different types of faces. 

### The Stitcher

The Stitcher is an Autodesk feature, that inputs a number of parametrized bodies and gives out a single stitched body. The code iterates over all bodies supplied to it recursively, and can take a lot of time to stitch when the number of bodies is high. 

## The Workflows

### Oldest Workflow 

1. Read mesh file
1. Make a planar surface from each triangle in the mesh
1. Send all planar surfaces to the stitcher, and get the output body
1. Render Body

### Modified Workflow 1.0
1. Read Mesh file
1. Segment mesh body into individual bodies. 
1. For each segment, make a planar surface from each triangle, and get a body from the stitcher. 
1. Send all segment bodies to the stitcher, and get the final stitched body. 

The above change yielded a lot of performance improvement. In cases when the segments were easily identifiable, the stitcher took lesser time. 

### Current Workflow
1. Read mesh file
1. Segment mesh body into individual bodies. 
1. Identify the type of body and if a known type is found, use the optimized algorithms for generating the body. Else, fall back to the previous workflow. 
1. Send bodies back to the stitcher and get the output body. 

The different kinds of bodies that I have been able to identify are planar bodies, generic conical surfaces and revolved surfaces. The optimized algorithms have resulted in performance gains of over 10000% in some cases, and significant performance gains in others. These gains are documented in the Table 1; the relevant bodies are shown in the pictures. 


## What Next? 
1. Currently working on better ways to calculate curvature from the mesh surface. This is a problem as the sampling can be very inconsistent. 
1. Feature to slice a portion of the mesh, convert it to BRep, giving an ability to edit it, and then to rejoin the edited piece with the original mesh. 
1. When a particular kind of a surface is not recognized, the time taken for the Stitcher can be very high. We will try to fit NURBS patches over portions of these unknown surfaces to try to reduce the computation time. 