Table plato {
  id integer pk
  pl_nombre varchar
  pl_desc varchar
  pl_rate integer
  pl_status boolean
  pl_tempoId integer
  pl_generoId integer
}

Table genero {
  id integer pk
  gn_nombre varchar
  gn_origin varchar
}

Table tempo {
  id integer pk
  tm_nombre varchar
}

Ref: plato.pl_tempoId > tempo.id
Ref: plato.pl_generoId > genero.id

Table propuesta {
  id integer pk
  pr_solicitudId integer
  pr_clienteId integer
  pr_chefId integer
  pr_platoId integer
}

Table chef {
  id integer pk
  ch_nombre varchar
  ch_email varchar unique
  ch_telefono varchar unique
  ch_userId integer
}

Ref: propuesta.pr_platoId > plato.id
Ref: chef.id > propuesta.pr_chefId
Ref: cliente.id > propuesta.pr_clienteId
Ref: solicitud.id > propuesta.pr_solicitudId

Table solicitud {
  id integer pk
  sl_clienteId integer
  sl_detailId varchar
}

Table solicitudDet {
  id integer pk
  det_lugar varchar
  det_invitados integer
  det_generoId integer
}

Table cliente {
  id integer pk
  cl_nombre varchar
  cl_email varchar unique
  cl_telefono varchar
  cl_userId boolean
}

Ref: cliente.id > solicitud.sl_clienteId 
Ref: solicitud.sl_detailId > solicitudDet.id
Ref: solicitudDet.det_generoId > genero.id

Table user {
  id integer pk
  usr_tipo varchar
}

Ref: user.id > cliente.cl_userId
Ref: user.id > chef.ch_userId
