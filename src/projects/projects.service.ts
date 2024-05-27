import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Repository } from 'typeorm';
import { InjectRepository} from '@nestjs/typeorm';
import Project from './entities/project.entity';

@Injectable()
export class ProjectsService {

  constructor (
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>
  ){}

  async  create(createProjectDto: CreateProjectDto) {
    const project = this.projectRepository.create(createProjectDto);
    return await this.projectRepository.save(project)
  }

  async  findAll() {
    return await this.projectRepository.find()
  }

  async  findOne(id: number) {
    return await this.projectRepository.findOneBy({id})
  }

  async update(id: number, update_project: UpdateProjectDto ){
    const project = await this.findOne(id);

    this.projectRepository.merge(project, update_project);

    return this.projectRepository.save(project);
  }

  async remove(id: number) {
    const project= await this.findOne(id);

    return this.projectRepository.remove(project);
  }
}
