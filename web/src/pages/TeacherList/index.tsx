import React from 'react'

import PageHeader from '../../components/PageHeader'

import TeacherItem from '../../components/TeacherItem'

import './styles.css'

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="subject" />
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem
          teacherName="João Paulo"
          teacherDescription="I'm João Paulo!"
          subject="Programação"
          pricePerHour="80,00"
        />
      </main>
    </div>
  )
}

export default TeacherList