const controller = {};


controller.list = (req, res) => {

   req.getConnection((err, conn)=> {
        conn.query('select * from cat_unidades', (err, unidades) => {
            
            if(err) {
               
               res.json(err);
            }
            res.render('vunidades', {
               data: unidades
            });

        });
   });
};


controller.save = (req, res) => {
  
   req.getConnection((err, conn) => {
 
      const data = req.body;

      conn.query('INSERT INTO cat_unidades set ?', [data], (err, customer) => {
        
         console.log(err);
          res.redirect('/');
  
      });
 
   });
 };

 controller.edit = (req, res) => {
   const { Id_uni } = req.params;
   req.getConnection((err, conn) => {
         conn.query('select * from cat_unidades where Id_uni = ?', [Id_uni], (err, unidades) => {

            res.render('unidades_edit', {
               data: unidades[0]
            })

         });
   });
};


 controller.delete = (req, res) => {
  
      const { Id_uni } = req.params;

   req.getConnection((err, conn) => {
      conn.query('DELETE FROM cat_unidades where Id_uni = ?', [Id_uni], (err, rows)=> {

          res.redirect('/');
      });
   });

 
  
 };

 controller.savechanges = (req, res) => {

   const { Id_uni } = req.params;
   const newUnidad = req.body;

   req.getConnection ((err, conn) => {

         conn.query('UPDATE cat_unidades SET ? WHERE Id_uni = ?', [newUnidad, Id_uni], (err, rows) => {

            res.redirect('/');

         });

   });

 };



module.exports = controller;