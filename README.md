
# Adding a New Portfolio 
## 1. Put Logo Into Source Code
1. Rename the filename of the logo to xxx_icoin.png or *.jpg, where xxx is the filename which cannot be too long. If project name is very long, please use short name to replace it. For example, CFC for CryptoFightClub.
2. Put renamed file to path 'src/static/logos/' folder.
3. Open 'src/App.js' for editing and add a new line such as follows 


    import logo_nulink from './static/logos/Nulink_icon@2x.png'

4. Adding a new element in 'logo_names' of 'src/App.js' which consists of project name, twitter and logo such as follows (Note: the order in logo_names will define the order in real webpage)

    
    {
        name:"Nulink",
        twitter:"https://twitter.com/NuLink_",
        logo:logo_nulink
    },
    
5. Check anything is okay by running the code on local computer. Open terminal and type such commands: 

    yarn start

6. A website on 'localhost:3000' will be opened and check anything is okay as you are willing. 

## 2. Get Deployed Build.zip

1. Run following command to get the deployed version of the website.

    
    yarn build

2. Once it is completed, compress build folder to 'build.zip' and login CPanel Backend:https://md-hk-7.webhostbox.net:2083/cpsess3585776574/

## 3. Upload to Remote Server via CPanel Backend

1. Click 'File Manager'. Then, click the checkbox 'Overwrite existing files' and click 'upload' to upload 'build.zip' in step 8.
2. Once step 9 is completed, right click 'build.zip' and click 'extract' to decompress file into build folder.
3. Back to CPanel backend and click terminal. Enter following commands

      
      mv build/* www/

4. Refresh website http://glockventures.com/ to check everything is fine.
   