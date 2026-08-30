package farizrifkyb.mini_cmdb.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import farizrifkyb.mini_cmdb.entity.ApplicationGroup;

public interface ApplicationGroupRepository extends JpaRepository<ApplicationGroup, Long> {
  
}
